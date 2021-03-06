from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class Page(TimeStampedModel):
    """
        A public profile specifically created for users such as players, coaches, teams, media.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    description = models.TextField()
    link = models.URLField()  # Link to link model

    class Meta:
        verbose_name = "Page"
        verbose_name_plural = "Pages"
        db_table = 'page'

    def __unicode__(self):
        return '%s' % (self.description)
