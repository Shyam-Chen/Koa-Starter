function Environments() {
  this.NODE_ENV = process.env.NODE_ENV || 'development';

  this.HOST_NAME = process.env.HOST_NAME || '0.0.0.0';
  this.SITE_PORT = process.env.SITE_PORT || 3000;

  this.SECRET = process.env.SECRET || 'SrScah0TXyRFyo7tqYBgmk9YgAPNGKXR';

  this.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test';
  this.CLOUDINARY_URL = process.env.CLOUDINARY_URL || 'cloudinary://key:secret@domain_name';
}

module.exports = new Environments();
