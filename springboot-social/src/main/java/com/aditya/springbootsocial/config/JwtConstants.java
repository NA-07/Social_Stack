package com.aditya.springbootsocial.config;

public class JwtConstants {
    public static String JWT_HEADER = "Authorization";
    public static final String SECRET_KEY = System.getenv().getOrDefault(
            "JWT_SECRET",
            "change-me-in-production-change-me-in-production-123456"
    );
    public static final String JWT_ISSUER = "springboot-social";
}
