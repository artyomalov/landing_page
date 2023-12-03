from django.db import models


def upload_to(instance, filename):
    return './main/{filename}'.format(filename=filename)


class AboutMe(models.Model):
    """
    Model of doctor's abot information.
    """
    text = models.TextField(max_length=5000, null=False, blank=False, verbose_name='Текст')
    about_photo = models.ImageField(upload_to=upload_to, default='/', verbose_name='Фото')

    @classmethod
    def object(cls):
        return cls._default_manager.all().first()  # Since only one item

    def save(self, *args, **kwargs):
        self.pk = self.id = 1
        return super().save(*args, **kwargs)

    def __str__(self):
        return 'Обо мне'

    class Meta:
        verbose_name = 'Обо мне'
        verbose_name_plural = 'Обо мне'


class Service(models.Model):
    """
    Model of the services that doctor provides.
    """
    title = models.CharField(max_length=200, null=False, blank=False, verbose_name='Заголовок')
    text = models.TextField(max_length=4000, null=False, blank=False, verbose_name='Текст')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'


class Diploma(models.Model):
    """
    Model of the doctor's diplomas.
    """
    diploma_name = models.CharField(max_length=100, null=False, blank=False,
                                    verbose_name='Название диплома')
    diploma_img = models.ImageField(upload_to=upload_to,
                                    verbose_name='Изображение диплома')

    def __str__(self):
        return self.diploma_name

    class Meta:
        verbose_name = 'Диплом'
        verbose_name_plural = 'Дипломы'


"""
Models contain data of social links and menu items.
"""

from django.db import models


# class MenuItem(models.Model):
#     menu_item_name = models.CharField(max_length=50, blank=False, null=False)
#     link_to = models.CharField(max_length=50, blank=False, null=False)
#
#     def __str__(self):
#         return self.menu_item_name
#
#     class Meta:
#         verbose_name = 'Элемент меню'
#         verbose_name_plural = 'Элементы меню'


def upload_to(instance, filename):
    return './service_data/{filename}'.format(filename=filename)


class SocialLinkData(models.Model):
    link_to = models.CharField(max_length=200, null=False, blank=False,
                               verbose_name='Ссылка на аккаунт в социальной сети')
    link_logo = models.ImageField(upload_to=upload_to, verbose_name='Логотип')
    link_name = models.CharField(max_length=100, null=False, blank=False,
                                 default='link',
                                 verbose_name='Название социальной сети')
    link_visible_data = models.CharField(max_length=100, null=False,
                                         blank=False,
                                         default='link_visible_data',
                                         verbose_name='Отображаемая ссылка')

    def __str__(self):
        return self.link_name

    class Meta:
        verbose_name = 'Социальная сеть'
        verbose_name_plural = 'Социальные сети'
