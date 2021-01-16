from django.contrib import admin

# Register your models here.

from .models import Reward, Reward_History, User


class RewardAdmin(admin.ModelAdmin):
    list_display = ("reward_name", "reward_cost", "reward_description")


admin.site.register(Reward, RewardAdmin)
