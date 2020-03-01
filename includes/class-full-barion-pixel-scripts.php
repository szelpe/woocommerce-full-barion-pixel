<?php


class Full_Barion_Pixel_Scripts {
    private $plugin;

    public function __construct($plugin) {

        add_action('wp_enqueue_scripts', [$this, 'add_scripts']);
        $this->plugin = $plugin;
    }

    public function add_scripts() {
        wp_enqueue_script( 'full_barion_pixel', $this->plugin->plugin_url() . '/js/dist/script.js');
    }
}
