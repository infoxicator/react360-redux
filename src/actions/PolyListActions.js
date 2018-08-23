import { POSTS_FETCH_SUCCESS, SET_CURRENT_POST } from './types';
import { POLY_PATH, API_KEY } from '../consts/PolyApi';

export const postsFetch = () => {
    return (dispatch) => {
        const options = {
            curated: true,
            format: 'GLTF2',
            key: API_KEY,
            pageSize: 5,
          };

        const queryString = Object.keys(options)
        .map(k => `${k}=${options[k]}`)
        .join('&');

        fetch(POLY_PATH + queryString)
        .then(response => response.json())
        .then(body => {
            const entries = body.assets.map(asset => {
            const objSource = asset.formats.filter(
            format => format.formatType === 'GLTF2'
            )[0];
                return {
                id: asset.name,
                name: asset.displayName,
                author: asset.authorName,
                description: asset.description,
                source: objSource,
                preview: asset.thumbnail.url,
                };
            });

            dispatch({ type: POSTS_FETCH_SUCCESS, payload: entries });
        });
    };
};

export const setCurrent = (value) => {
    return ({ type: SET_CURRENT_POST, payload: value });
};
