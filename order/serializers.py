from rest_framework import serializers

from .models import Order, OrderItem

from product.serializers import ProductSerializer

class OrderItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderItem
        fields = (
            'product',
            'price',
            'quantity',
        )

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = (
            'id',
            'first_name',
            'last_name',
            'email',
            'phone',
            'address',
            'zipcode',
            'place',
            'stripe_token',
            'items',
        )

    def create(self, validated_data):
        # pop items thus no insert items in order
        items_data = validated_data.pop('items')
        order = Order.objects.create(**validated_data)

        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)
        
        return order

class AccountOrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = OrderItem
        fields = (
            'product',
            'price',
            'quantity',
        )

class AccountOrderSerializer(serializers.ModelSerializer):
    items = AccountOrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = (
            'id',
            'first_name',
            'last_name',
            'email',
            'phone',
            'address',
            'zipcode',
            'place',
            'stripe_token',
            'items',
            'paid_amount',
        )