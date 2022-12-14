export interface Affiliate {
    account_code: string,
    address_1: string,
    address_2: string,
    allow_reservation_sharing: boolean,
    android_package_name: string,
    auto_cancel_enabled: boolean,
    auto_cancel_time: string,
    auto_check_out_enabled: boolean,
    auto_check_out_time: string,
    block_checkin_lead_hours: number,
    city: string,
    config: any,
    country:string,
    country_code:string,
    created_at:string,
    email_importer_enabled: true,
    fax:string,
    friendly_id:string,
    geofence_radius_m: number,
    guest_app_client_ids: Array<any>,
    id_verification_config: any,
    invitation_config: any,
    ios_app_store_id:string,
    ios_bundle_id:string,
    is_active:boolean,
    is_live: boolean,
    modified_at:string,
    name:string,
    phone:string,
    pms_config: object,
    pos_config: object,
    postal_code:string,
    prerequisite_webview_config: object
    province:string,
    region:string,
    short_name:string,
    timezone:string,
    tkt_config: object,
    website:string
}
