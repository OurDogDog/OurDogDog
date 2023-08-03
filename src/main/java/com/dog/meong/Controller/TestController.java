package com.dog.meong.Controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @CrossOrigin(origins = "http://localhost:3000") // 클라이언트 주소를 여기에 설정
    @GetMapping("/api/hello")
    public String getHelloMessage() {
        return "Hello, World!";
    }

}
