"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.getOptions = exports.sd_models = void 0;
const axios_1 = __importDefault(require("axios"));
function sd_models() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, axios_1.default)({
            method: 'GET',
            url: `${process.env.BASE_SD_SERVER}/sdapi/v1/sd-models`,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: {}
        });
        return result.data;
    });
}
exports.sd_models = sd_models;
function getOptions() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, axios_1.default)({
            method: 'GET',
            url: `${process.env.BASE_SD_SERVER}/sdapi/v1/options`,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: {}
        });
        return result.data;
    });
}
exports.getOptions = getOptions;
function options(modelName, hash) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, axios_1.default)({
            method: 'POST',
            url: `${process.env.BASE_SD_SERVER}/sdapi/v1/options`,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                "X-Fc-Invocation-Type": "Async"
            },
            data: {
                "samples_save": true,
                "samples_format": "png",
                "samples_filename_pattern": "",
                "save_images_add_number": true,
                "grid_save": true,
                "grid_format": "png",
                "grid_extended_filename": false,
                "grid_only_if_multiple": true,
                "grid_prevent_empty_spots": false,
                "n_rows": -1,
                "enable_pnginfo": true,
                "save_txt": false,
                "save_images_before_face_restoration": false,
                "save_images_before_highres_fix": false,
                "save_images_before_color_correction": false,
                "save_mask": false,
                "save_mask_composite": false,
                "jpeg_quality": 80,
                "webp_lossless": false,
                "export_for_4chan": true,
                "img_downscale_threshold": 4,
                "target_side_length": 4000,
                "img_max_size_mp": 200,
                "use_original_name_batch": true,
                "use_upscaler_name_as_suffix": false,
                "save_selected_only": true,
                "save_init_img": false,
                "temp_dir": "",
                "clean_temp_dir_at_start": false,
                "outdir_samples": "",
                "outdir_txt2img_samples": "/mnt/auto/sd/outputs/txt2img",
                "outdir_img2img_samples": "/mnt/auto/sd/outputs/img2img",
                "outdir_extras_samples": "/mnt/auto/sd/outputs/extras",
                "outdir_grids": "",
                "outdir_txt2img_grids": "/mnt/auto/sd/outputs/txt2img-grids",
                "outdir_img2img_grids": "/mnt/auto/sd/outputs/img2img-grids",
                "outdir_save": "/mnt/auto/sd/outputs/saved",
                "outdir_init_images": "outputs/init-images",
                "save_to_dirs": true,
                "grid_save_to_dirs": true,
                "use_save_to_dirs_for_ui": false,
                "directories_filename_pattern": "[date]",
                "directories_max_prompt_words": 8,
                "ESRGAN_tile": 192,
                "ESRGAN_tile_overlap": 8,
                "realesrgan_enabled_models": [
                    "R-ESRGAN 4x+",
                    "R-ESRGAN 4x+ Anime6B"
                ],
                "upscaler_for_img2img": null,
                "SCUNET_tile": 256,
                "SCUNET_tile_overlap": 8,
                "face_restoration_model": "CodeFormer",
                "code_former_weight": 0.5,
                "face_restoration_unload": false,
                "show_warnings": false,
                "memmon_poll_rate": 8,
                "samples_log_stdout": false,
                "multiple_tqdm": true,
                "print_hypernet_extra": false,
                "unload_models_when_training": false,
                "pin_memory": false,
                "save_optimizer_state": false,
                "save_training_settings_to_txt": true,
                "dataset_filename_word_regex": "",
                "dataset_filename_join_string": " ",
                "training_image_repeats_per_epoch": 1,
                "training_write_csv_every": 500,
                "training_xattention_optimizations": false,
                "training_enable_tensorboard": false,
                "training_tensorboard_save_images": false,
                "training_tensorboard_flush_every": 120,
                "sd_model_checkpoint": modelName,
                "sd_checkpoint_cache": 0,
                "sd_vae_checkpoint_cache": 0,
                "sd_vae": "Automatic",
                "sd_vae_as_default": true,
                "inpainting_mask_weight": 1,
                "initial_noise_multiplier": 1,
                "img2img_color_correction": false,
                "img2img_fix_steps": false,
                "img2img_background_color": "#ffffff",
                "enable_quantization": false,
                "enable_emphasis": true,
                "enable_batch_seeds": true,
                "comma_padding_backtrack": 20,
                "CLIP_stop_at_last_layers": 1,
                "upcast_attn": false,
                "randn_source": "GPU",
                "use_old_emphasis_implementation": false,
                "use_old_karras_scheduler_sigmas": false,
                "no_dpmpp_sde_batch_determinism": false,
                "use_old_hires_fix_width_height": false,
                "dont_fix_second_order_samplers_schedule": false,
                "interrogate_keep_models_in_memory": false,
                "interrogate_return_ranks": false,
                "interrogate_clip_num_beams": 1,
                "interrogate_clip_min_length": 24,
                "interrogate_clip_max_length": 48,
                "interrogate_clip_dict_limit": 1500,
                "interrogate_clip_skip_categories": [],
                "interrogate_deepbooru_score_threshold": 0.5,
                "deepbooru_sort_alpha": true,
                "deepbooru_use_spaces": false,
                "deepbooru_escape": true,
                "deepbooru_filter_tags": "",
                "extra_networks_default_view": "cards",
                "extra_networks_default_multiplier": 1,
                "extra_networks_card_width": 0,
                "extra_networks_card_height": 0,
                "extra_networks_add_text_separator": " ",
                "sd_hypernetwork": "None",
                "return_grid": true,
                "return_mask": false,
                "return_mask_composite": false,
                "do_not_show_images": false,
                "send_seed": true,
                "send_size": true,
                "font": "DejaVuSans.ttf",
                "js_modal_lightbox": true,
                "js_modal_lightbox_initially_zoomed": true,
                "js_modal_lightbox_gamepad": true,
                "js_modal_lightbox_gamepad_repeat": 250,
                "show_progress_in_title": true,
                "samplers_in_dropdown": true,
                "dimensions_and_batch_together": true,
                "keyedit_precision_attention": 0.1,
                "keyedit_precision_extra": 0.05,
                "keyedit_delimiters": ".,\\/!?%^*;:{}=`~()",
                "quicksettings_list": [
                    "sd_model_checkpoint"
                ],
                "hidden_tabs": [],
                "ui_reorder": "inpaint, sampler, checkboxes, hires_fix, dimensions, cfg, seed, batch, override_settings, scripts",
                "ui_extra_networks_tab_reorder": "",
                "localization": "None",
                "gradio_theme": "Default",
                "add_model_hash_to_info": true,
                "add_model_name_to_info": true,
                "add_version_to_infotext": true,
                "disable_weights_auto_swap": true,
                "show_progressbar": true,
                "live_previews_enable": true,
                "show_progress_grid": true,
                "show_progress_every_n_steps": 10,
                "show_progress_type": "Approx NN",
                "live_preview_content": "Prompt",
                "live_preview_refresh_period": 1000,
                "hide_samplers": [],
                "eta_ddim": 0,
                "eta_ancestral": 1,
                "ddim_discretize": "uniform",
                "s_churn": 0,
                "s_min_uncond": 0,
                "s_tmin": 0,
                "s_noise": 1,
                "eta_noise_seed_delta": 0,
                "always_discard_next_to_last_sigma": false,
                "uni_pc_variant": "bh1",
                "uni_pc_skip_type": "time_uniform",
                "uni_pc_order": 3,
                "uni_pc_lower_order_final": true,
                "postprocessing_enable_in_main_ui": [],
                "postprocessing_operation_order": [],
                "upscaling_max_images_in_cache": 5,
                "disabled_extensions": [],
                "disable_all_extensions": "none",
                "restore_config_state_file": "",
                "sd_checkpoint_hash": hash !== null && hash !== void 0 ? hash : "",
                "sd_lora": "None",
                "lora_apply_to_outputs": false
            }
        });
        return result || '';
    });
}
exports.options = options;