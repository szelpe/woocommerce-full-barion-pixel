<?php
/**
 * Plugin Name:       Barion Pixel
 * Description:       Adds full Barion Pixel support.
 * Version:           1.0.0
 * Requires at least: 5.0
 * Requires PHP:      7.0
 * Author:            Peter Szel <szelpeter@szelpeter.hu>
 * Author URI:        https://szelpeter.hu/
 * License:           GNU General Public License v3.0
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       full-barion-pixel
 * Domain Path:       /translations
 */

defined('ABSPATH') or die('No script kiddies please!');

$barion_pixel_plugin = new Full_Barion_Pixel_Plugin();

class Full_Barion_Pixel_Plugin {
    public function __construct() {
        add_action('plugins_loaded', [$this, 'init'], 0);
    }

    function init() {
        if (!class_exists('WooCommerce') || !class_exists('WooCommerce_Barion_Plugin')) {
            add_action('admin_notices', 'Full_Barion_Pixel_Plugin::inactive_notice');
            return;
        }

        $this->load_plugin_textdomain();
        add_action('woocommerce_barion_init', [$this, 'barion_init'], 10, 2);
    }

    function barion_init($barion_client, $gateway) {
    }

    public static function inactive_notice() {
        ?>
        <div class="notice notice-warning">
            <p>
                Full Pixel support for Barion requires the "WooCommerce" and "Barion Payment Gateway for WooCommerce"
                plugins.
            </p>
        </div>
        <?php
    }

    public function plugin_url() {
        return untrailingslashit(plugins_url('/', __FILE__));
    }

    private function plugin_path() {
        return $this->plugin_path = untrailingslashit(plugin_dir_path(__FILE__));
    }

    public static function log($message) {
        $logger = wc_get_logger();
        $logger->error($message, ['full-barion-pixel']);
    }

    private function load_plugin_textdomain() {
        $plugin_path = plugin_basename(dirname(__FILE__) . '/translations');
        load_plugin_textdomain('full-barion-pixel', '', $plugin_path);
    }
}



