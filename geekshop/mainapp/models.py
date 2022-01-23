from django.db import models


class ProductCategory(models.Model):
    name = models.CharField(
        verbose_name='Имя',
        max_length=64,
        unique=True,
    )
    description = models.TextField(
        verbose_name='Описание',
        blank=True,
    )
    created_at = models.DateTimeField(
        verbose_name='Создан',
        auto_now_add=True,
    )
    updated_at = models.DateTimeField(
        verbose_name='Обновлен',
        auto_now=True,
    )
    is_active = models.BooleanField(
        verbose_name='Активный',
        default=True,
    )

    def __str__(self):
        return self.name


class Product(models.Model):
    category = models.ForeignKey(
        ProductCategory,
        verbose_name='Категория',
        on_delete=models.CASCADE,
    )
    name = models.CharField(
        verbose_name='Имя продукта',
        max_length=128,
    )
    image = models.ImageField(
        verbose_name='Фотография',
        upload_to='products_imgs',
        blank=True,
    )
    short_desc = models.CharField(
        verbose_name='Короткое описание',
        max_length=60,
        blank=True,
    )
    description = models.TextField(
        verbose_name='Описание',
        blank=True,
    )
    price = models.DecimalField(
        verbose_name='Цена продукта',
        max_digits=8,
        decimal_places=2,
        default=0,
    )
    quantity = models.PositiveIntegerField(
        verbose_name='Кол-во на складе',
        default=0,
    )
    is_active = models.BooleanField(
        verbose_name='Активный',
        default=True,
    )

    def __str__(self):
        return f'{self.name} ({self.category.name})'
