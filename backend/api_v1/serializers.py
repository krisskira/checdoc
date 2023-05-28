from logging import Logger
from rest_framework import serializers
from django.core.exceptions import ValidationError
from .choices import PROGRAM_TYPE
from .models import VideoModel
from .forms import VideoForm

class VideoImagesSerializer(serializers.Serializer):
    image_url = serializers.ImageField()

    def to_representation(self, instance: VideoModel):
        representation = super().to_representation(instance)

        image_obj = instance.image_url

        width = image_obj.width if image_obj else None
        height = image_obj.height if image_obj else None

        representation['url'] = representation.pop('image_url')
        representation['width'] = width
        representation['height'] = height

        return {
            "Poster Art": representation
        }

class VideoSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=255)
    description = serializers.CharField()
    programType = serializers.ChoiceField(choices=PROGRAM_TYPE)
    releaseYear = serializers.IntegerField()
    image_url = serializers.ImageField()

    class Meta:
        model = VideoModel
        fields = '__all__'

    def to_representation(self, instance: VideoModel):
        image = VideoImagesSerializer(instance)
        valid_fields = set(self.fields.keys()) - {'image_url'}
        representation = {
            field_name: self.fields[field_name].to_representation(getattr(instance, field_name))
            for field_name in valid_fields
        }
        representation["images"] = image.data
        return representation

    def to_internal_value(self, data):
        form_data = data.copy()
        # Obtener la imagen de los archivos de la solicitud
        form_data['image_url'] = self.context['request'].FILES.get('image_url')
        form = VideoForm(data=form_data, files=self.context['request'].FILES)

        if form.is_valid():
            return form.cleaned_data
        else:
            raise serializers.ValidationError(form.errors)

    def create(self, validated_data):
        return self.Meta.model.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.save()
        return instance

