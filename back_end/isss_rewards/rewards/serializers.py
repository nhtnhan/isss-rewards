from rest_framework import serializers
from .models import Reward

class RewardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reward
        fields = ['reward_name','reward_cost','reward_description']