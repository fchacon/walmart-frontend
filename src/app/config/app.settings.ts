import { environment } from '../../environments/environment';

const ASSETS_PATH = environment.ASSETS_PATH;
const IMAGES_PATH = ASSETS_PATH + 'images/';
const BACKEND_BASE_URL = environment.BACKEND_BASE_URL;

export class AppSettings {
	public static ASSETS_PATH = ASSETS_PATH;
	public static IMAGES_PATH = IMAGES_PATH;
	public static BACKEND_BASE_URL = BACKEND_BASE_URL;
	public static ITEMS_PER_PAGE = 10;
}
