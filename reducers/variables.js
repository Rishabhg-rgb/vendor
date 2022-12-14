import { CHANGE_VARIABLE } from "../actions/type"
const INITIAL_STATE = {
    
    activity: false,
    analytics_bag_clicks: 0,
    analytics_cart: null,
    analytics_cart_count: 0,
    analytics_header_clicks: 0,
    analytics_products: null, 
    analytics_products_count: 0,
    analytics_profile_clicks: 0,
    analytics_search_clicks: 0,
    analytics_vendors: null,
    analytics_vendors_count: null,
    categories_array: null,
    category_selected_uuid: null,
    files: null,
    navigation_expand: false,
    navigation_expand_type: 0,
    orders_array: null,
    product: null,
    products_array: null,
    sub_categories_array: null,
    sub_category_selected_uuid: null,
    sub_sub_categories_array: null,
    sub_sub_category_selected_uuid: null,
    user_role: null,
    users_array: null,
    vendor_selected_uuid: null,
    vendors_array: null,
    wallet_accepted_requests: null,
    wallet_pending_requests: null,
    wallet_pending_requests_count: 0,
    wallet_rejected_requests: null,
    wallet_request_data: null,
    modal_display_flag: false,
    modal_display_type: null,
    modal_category_name: "",
    modal_category_image: "",
    modal_category_uuid: "",
    modal_category_masthead: "",
    image: null,
    image_id: null,
    masthead: null,

    modal_product_category_uuid: "",
    modal_product_description: "",
    modal_product_dimension_height: "",
    modal_product_dimension_length: "",
    modal_product_dimension_weight: "",
    modal_product_dimension_width: "",
    modal_product_name: "",
    modal_product_off_percentage: "",
    modal_product_price: "",
    modal_product_price_full: "",
    modal_product_short_description: "",
    modal_product_vendor_uuid: "",
    modal_product_category_two_uuid: "",
    modal_product_category_three_uuid: "",
    modal_product_is_active: true,
    products_pages: 0,
    variations_array: null,
    modal_product_is_variation: false,
    modal_product_variation_uuid: "",
    modal_product_parent_sku: "",
    modal_category_on_home: false,
    modal_variation_uuid: "",
    modal_variation_name: "",
    modal_vendor_is_active: true,
    modal_variation_is_active: true,
    modal_category_is_active: true,
    orders_array_pending: null,
    orders_array_accepted: null,
    orders_array_dispatched: null,
    modal_category_parent_id: null,
    modal_category_parent: null,
    orders_array_cancelled: null,
    modal_product_stock: "",
    modal_page_id: "",
    file: [],
    modal_category_order: null,
    coupons: null,
    processing: false,
    modal_flag: false,
    orders_array_rejected: null,
    products_search_array: null,
    product_search_flag: false,

}
const a = (state = INITIAL_STATE, action) =>  {

    switch (action.type) {

        case CHANGE_VARIABLE:
      		return {...state, [ action.payload.key]: action.payload.value }
        default:
            return state

    }
    
}
export { a as default }
