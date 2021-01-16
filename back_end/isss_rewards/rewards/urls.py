from django.urls import path, include
from . import views

urlpatterns = [
    path('rewards', views.fetch_rewards, name='rewards'),

]