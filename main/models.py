from django.db import models


def upload_to(instance, filename):
    return './main/{filename}'.format(filename=filename)


class AboutMe(models.Model):
    """
    Model of doctor's abot information.
    """
    text = models.TextField(max_length=5000, null=False, blank=False)
    about_photo = models.ImageField(upload_to=upload_to, default='/')

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
    title = models.CharField(max_length=200, null=False, blank=False)
    text = models.TextField(max_length=4000, null=False, blank=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'


class Diploma(models.Model):
    """
    Model of the doctor's diplomas.
    """
    diploma_name = models.CharField(max_length=100, null=False, blank=False)
    diploma_img = models.ImageField(upload_to=upload_to)

    def __str__(self):
        return self.diploma_name

    class Meta:
        verbose_name = 'Диплом'
        verbose_name_plural = 'Дипломы'
