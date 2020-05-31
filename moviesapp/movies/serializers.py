from rest_framework import serializers
from .models import Movie, Rating


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['score', 'review']


class MovieSerializer(serializers.ModelSerializer):
    ratings = RatingSerializer(many=True, read_only=True, required=False)

    class Meta:
        model = Movie
        fields = ['id', 'title', 'year', 'rated', 'released_on', 'genre', 'director', 'plot', 'ratings']
