package tn.esprit.gestionski.aspect;


import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.hibernate.mapping.Join;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@Aspect
public class LogginAspect {


    @After("execution(* tn.esprit.gestionski.services.*.add*(..))")
    public void  logMethod(JoinPoint jp) {
        System.out.println("success !");
    }
}
