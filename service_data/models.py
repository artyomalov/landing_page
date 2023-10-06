"""
Models contain data of social links and menu items.
"""

from django.db import models
class MenuItem(models.Model):
    menu_item_name = models.CharField(max_length=50, blank=False, null=False)
    link_to = models.CharField(max_length=50, blank=False, null=False)

    def __str__(self):
        return self.menu_item_name

    class Meta:
        verbose_name = 'menu item name'
        verbose_name_plural = 'menu item names'


def upload_to(instance, filename):
    return './service_data/{filename}'.format(filename=filename)


class SocialLinkData(models.Model):
    link_to = models.CharField(max_length=200, null=False, blank=False)
    link_logo = models.ImageField(upload_to=upload_to)
    link_name = models.CharField(max_length=100, null=False, blank=False,
                                 default='link')
    link_visible_data = models.CharField(max_length=100, null=False,
                                         blank=False,
                                         default='link_visible_data')

    def __str__(self):
        return self.link_name

    class Meta:
        verbose_name = 'link data'
        verbose_name_plural = 'links data'
