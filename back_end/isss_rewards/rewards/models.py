from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

# class for users and their rewards points
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.TextField(default="")
    uid = models.IntegerField(default="0")
    balance = models.IntegerField(default="0")

@receiver(post_save, sender=User)
def update_user_profile(sender, instance, created, **kwargs):
    print(instance)
    print(instance.id)
    print(instance.username)
    
    if created:
        UserProfile.objects.create(user=instance)
        #instance.name = SocialAccount.extra_data['name']
        #instance.id = SocialAccount.extra_data['id']

        #data = UserProfile.objects.filter(uid=0)
        #print(data)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.userprofile.save()

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
