# -*- coding: utf-8 -*-
from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^$', view=views.MovieListView.as_view(), name='index'),
    url(r'^(?P<id>[0-9]+)/$', view=views.MovieDetailView.as_view(), name='detail'),
    url(r'^create/$', view=views.MovieCreateView.as_view(), name='create'),
    url(r'^update/(?P<id>[0-9]+)/$', view=views.MovieUpdateView.as_view(), name='update'),
    url(r'^delete/(?P<id>[0-9]+)/$', view=views.MovieDeleteView.as_view(), name='delete'),
    url(r'^api/$', views.api_movies_list),
    url(r'^api/create', views.api_movie_create),
    url(r'^api/(?P<movie_id>[0-9]+)$', views.api_movie),
    url(r'^api/ratings/(?P<movie_id>[0-9]+)$', views.api_ratings)
]
