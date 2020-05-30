# -*- coding: utf-8 -*-

"""Movies views."""
from django.core.exceptions import ValidationError
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib import messages
from django.shortcuts import redirect
from django.http import Http404
from django.urls import reverse

from .models import Movie

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *


class MovieListView(ListView):
    """Show all movies."""

    model = Movie


class MovieDetailView(DetailView):
    """Show the requested movie."""

    model = Movie
    pk_url_kwarg = 'id'


class MovieCreateView(SuccessMessageMixin, CreateView):
    """Create a new movie."""

    model = Movie
    pk_url_kwarg = 'id'
    fields = ['title', 'year', 'rated', 'released_on', 'genre', 'director', 'plot']
    success_message = 'The movie created successfully'

    def get_success_url(self):
        return reverse('movies:detail', kwargs={'id': self.object.id})

    def form_invalid(self, form):
        messages.add_message(self.request, messages.ERROR, 'The creation has failed')
        return super(MovieCreateView, self).form_invalid(form)


class MovieUpdateView(SuccessMessageMixin, UpdateView):
    """Update the requested movie."""

    model = Movie
    pk_url_kwarg = 'id'
    fields = ['title', 'year', 'rated', 'released_on', 'genre', 'director', 'plot']
    success_message = 'The movie updated successfully'

    def get_success_url(self):
        return reverse('movies:detail', kwargs={'id': self.object.id})

    def form_invalid(self, form):
        messages.add_message(self.request, messages.ERROR, 'The update has failed')
        return super(MovieUpdateView, self).form_invalid(form)


class MovieDeleteView(DeleteView):
    """Delete the requested movie."""

    model = Movie
    pk_url_kwarg = 'id'

    def get_success_url(self):
        return reverse('movies:index')


@api_view(['GET', 'POST'])
def api_movies_list(request):
    if request.method == 'GET':
        serializer = MovieSerializer(Movie.objects.all(), context={'request': request}, many=True)
        return Response({'data': serializer.data})

    elif request.method == 'POST':
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def api_movie(request, movie_id):
    try:
        movie = Movie.objects.get(id=movie_id)
    except Movie.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = MovieSerializer(movie, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = MovieSerializer(movie, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        movie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
