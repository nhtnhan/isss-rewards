from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from .models import Reward
from .serializers import RewardsSerializer
import json


# Create your views here.

"""
example calls 
localhost:8000/rewards?table=rewards_table&all_rewards=true
"""
@api_view(['GET'])
def fetch_rewards(request):
    table = request.GET.get('table')
    print(table)
    if table == 'rewards_table':
        all_rewards = request.GET.get('all_rewards')
        print(all_rewards)
        if all_rewards == 'true':
            reward_data = Reward.objects.all()
            serializer = RewardsSerializer(reward_data, many=True)
            return JsonResponse({
                "reward_data": serializer.data
            }, status=200)
    else:
        return JsonResponse({
            "success": False,
            "message": "Trying to access data through wrong API"
        }, status=403)
