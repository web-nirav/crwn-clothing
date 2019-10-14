<?php 



$orders = $responseBody->data;

foreach ($orders as $order) {
    $orderData = [
        'order_id'            => $order->order_no,
        'customer_id'         => optional($order)->customer_no,
        'customer_name'       => optional($order)->customer_name,
        'customer_address'    => optional($order)->customer_address,
        'customer_post_code'  => optional($order)->customer_post_code,
        'customer_city'       => optional($order)->customer_city,
        'order_date'          => optional($order)->order_date,
        'shipment_date'       => optional($order)->shipment_date,
        'completely_reserved' => optional($order)->completely_reserved,
        'contains_bike'       => optional($order)->contains_bike,
        'status'              => strtolower($order->status),
    ];
    $newOrder = $this->createOrUpdateOrder($orderData);

    $orderLines = data_get($order, 'sales_order_lines');
    $orderLines = array_wrap($orderLines);
    if (empty($orderLines)) {
        continue;
    }


    $name = "";
    if(true)
    {
        $name = "Nirav";
    }
    else
    {
        $name = "Nilu";
    }

    
