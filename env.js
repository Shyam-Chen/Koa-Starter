function Environment() {
  this.NODE_ENV = process.env.NODE_ENV || 'development';

  this.HOST_NAME = process.env.HOST_NAME || '0.0.0.0';
  this.SITE_PORT = process.env.SITE_PORT || 3000;

  this.SECRET_KEY = process.env.SECRET_KEY || 'SrScah0TXyRFyo7tqYBgmk9YgAPNGKXR';

  this.REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379/4';
  this.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test';
  this.CLOUDINARY_URL = process.env.CLOUDINARY_URL || 'cloudinary://key:secret@domain_name';
}

module.exports = new Environment();
