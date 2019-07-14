
const BIN_ID = '5d2aec8026f5027360f28832';
const SECRET_KEY = '$2a$10$Phw/49LD4zdf8SxYs/XLo.xtM0XUdwAstQHolCW/KaPkZpJW9IIxu';

let galleryContent = null;

export async function getGalleryAlbums() {

  if (!!galleryContent) {
    return galleryContent;
  }

  const requestSettings = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'secret-key': SECRET_KEY
    }
  };

  galleryContent = await fetch(`https://api.jsonbin.io/b/${BIN_ID}`, requestSettings)
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(e => {
      console.error(e);
      return {}
    });
  return galleryContent;
}
