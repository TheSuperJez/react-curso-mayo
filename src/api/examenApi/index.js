import {get} from 'axios';
const url = 'https://api.flickr.com/services/rest/'
			+'?method=flickr.photos.search&api_key=4f024cb186910346bf5a36d92e3f2474&'
			+'format=json&nojsoncallback=1&text=';

class ExamenApi {
	static buscar(text) {
		console.log('ir a ' + text);
		return get(url+ text);
	}
}

export default ExamenApi;
