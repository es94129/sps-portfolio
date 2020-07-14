package com.google.sps.servlets;

class Comment {
    String message;
    String imageUrl;

    Comment(String message, String imageUrl) {
        this.message = message;
        this.imageUrl = imageUrl;
    }
}