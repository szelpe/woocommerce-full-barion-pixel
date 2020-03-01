<?php

class Full_Barion_Pixel_Scripts {
    private $plugin;

    public function __construct($plugin) {
        add_action('wp_enqueue_scripts', [$this, 'add_scripts']);
        $this->plugin = $plugin;

    }

    public function add_scripts() {
        wp_enqueue_script('full_barion_pixel', $this->plugin->plugin_url() . '/js/dist/index.js');
        $params = [
            'currency' => get_woocommerce_currency(),
        ];

        if (is_product()) {
            $product = wc_get_product();

            $params['product'] = [
                'id' => (string)$product->get_id(),
                'name' => $product->get_formatted_name(),
                'quantity' => 1,
                'unit' => 'piece',
                'unitPrice' => (float)$product->get_price()
            ];
        }

        if (is_order_received_page()) {
            global $wp;

            $order_id = apply_filters('woocommerce_thankyou_order_id', absint($wp->query_vars['order-received']));
            $order = wc_get_order($order_id);

            if (!empty($order)) {
                $params['purchasedOrder'] = [
                    'contents' => $this->get_order_contents($order),
                    'revenue' => (float)$order->get_total(),
                    'step' => 0
                ];
            }
        }

        wp_localize_script('full_barion_pixel', 'barionPixelParams', $params);
    }

    private function get_order_contents(WC_Order $order) {
        $result = [];

        foreach ($order->get_items() as $item_id => $item) {
            array_push($result, [
                'contentType' => 'Product',
                'currency' => get_woocommerce_currency(),
                'id' => (string)$item_id,
                'name' => $item->get_name(),
                'quantity' => $item->get_quantity(),
                'totalItemPrice' => (float)$order->get_line_subtotal($item, true),
                'unit' => 'piece',
                'unitPrice' => (float)$order->get_item_subtotal($item, true)
            ]);
        }

        return $result;
    }
}
