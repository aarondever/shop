from django.db import models

class BaseModel(models.Model):

    # 'insert' will write current time to this column
    create_time = models.DateTimeField(auto_now_add=True)
    # 'insert' or 'update' will write current time to this column
    update_time = models.DateTimeField(auto_now=True)

    class Meta:
        # abstract model, no table
        abstract = True
