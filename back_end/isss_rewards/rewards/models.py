from django.db import models

# Create your models here.

# class for users and their rewards points
class User(models.Model):
    username = models.TextField()
    uid = models.IntegerField(default="0")
    balance = models.FloatField()


# class for rewards and their prices
class Reward(models.Model):
    reward_name = models.TextField()
    reward_cost = models.FloatField()
    reward_description = models.TextField()

# tracks history by username
class Reward_History(models.Model):
    username = models.TextField()
    reward_redeemed = models.TextField()
    date = models.TextField()


# reward codes that have a limit
# if max_times_redeemed = 0 display error message
class Reward_Code(models.Model):
    username = models.TextField()
    code = models.TextField()
    max_times_redeemed = models.IntegerField()
