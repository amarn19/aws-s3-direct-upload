const { generateGetUrl, generatePutUrl } = require('./AWSPresigner');

async function initialize(){
  let Key = 'file-to-read.jpeg';
  const getUrl =  await generateGetUrl(Key);
  console.log('getUrl',': ', getUrl);

  Key =  'file-to-upload.jpeg';
  const putUrl = await generatePutUrl(Key);
  console.log('putUrl',': ', putUrl);
}

initialize();