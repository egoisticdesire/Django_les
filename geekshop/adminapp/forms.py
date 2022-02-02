from django import forms
from authapp.models import ShopUser
from authapp.forms import ShopUserEditForm
from mainapp.models import ProductCategory, Product


class ShopUserAdminEditForm(ShopUserEditForm):
    class Meta:
        model = ShopUser
        fields = (
            'username',
            'first_name',
            'last_name',
            'age',
            'email',
            'password',
            'avatar',
            # 'groups',
            # 'user_permissions',
            'date_joined',
            'is_superuser',
            'is_staff',
            'is_active',
        )

    def __init__(self, *args, **kwargs):
        super(ShopUserAdminEditForm, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            if field_name == 'is_superuser' or \
                    field_name == 'is_staff' or \
                    field_name == 'is_active':
                field.widget.attrs['class'] = ''
            else:
                field.widget.attrs['class'] = 'form-control'


class ProductCategoryEditForm(forms.ModelForm):
    class Meta:
        model = ProductCategory
        fields = (
            'name',
            'description',
            'is_active',
        )

    def __init__(self, *args, **kwargs):
        super(ProductCategoryEditForm, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            if field_name == 'is_active':
                field.widget.attrs['class'] = ''
            else:
                field.widget.attrs['class'] = 'form-control'


class ProductEditForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = (
            'name',
            'category',
            'image',
            'short_desc',
            'description',
            'price',
            'quantity',
            'is_active',
        )

    def __init__(self, *args, **kwargs):
        super(ProductEditForm, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            if field_name == 'is_active':
                field.widget.attrs['class'] = ''
            else:
                field.widget.attrs['class'] = 'form-control'
