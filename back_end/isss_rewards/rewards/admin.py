from django.contrib import admin

# Register your models here.

from .models import Reward, Reward_History, UserProfile, Reward_Code


class RewardAdmin(admin.ModelAdmin):
    list_display = ("reward_name", "reward_cost", "reward_description")

class Reward_HistoryAdmin(admin.ModelAdmin):
    list_display = ("username", "reward_redeemed", "date")

class UserAdmin(admin.ModelAdmin):
    list_display = ("user", "name", "uid", "balance")

class Reward_CodeAdmin(admin.ModelAdmin):
    list_display = ("username", "code","max_times_redeemed")

admin.site.register(Reward, RewardAdmin)
admin.site.register(Reward_History, Reward_HistoryAdmin)
admin.site.register(UserProfile, UserAdmin)