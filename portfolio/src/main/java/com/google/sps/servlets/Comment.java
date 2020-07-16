package com.google.sps.servlets;

class Comment {
    private String message;
    private String imageUrl;

    Comment(String message, String imageUrl) {
        this.message = message;
        this.imageUrl = imageUrl;
    }
}
