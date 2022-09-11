export const getImage = async () => {
  try {
    const apiKey = 'DcFVDfqadxnV2cRtAGwr8Zdfw9nEOQSE';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`);
    const { data } = await resp.json();

    const { url } = data.images.original;

    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append(img);

    return url;

  } catch (error) {
    console.log(error);
    return 'Image not found';
  }
}