<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController {

    /**
     * @Route("/", name="homepage")
     */
    public function home(){
        $firstname = 'test';
        return $this->render(
            'home.html.twig',
            [
                'title' => "Accueil",
                'firstname' => $firstname
            ]
        );
    }

    /**
     * @Route("/login", name="login")
     */
    public function login(){
        $firstname = '';
        $lastname = '';

        return $this->render(
            'login.html.twig',
            [
                'firstname' => $firstname,
                'lastname' => $lastname
            ]
        );
    }

    /**
     * @Route("/list", name="gamelist")
     */
    public function gameList(){
        $firstname = 'test';
        return $this->render(
            'gameList.html.twig',
            [
                'firstname' => $firstname
            ]
        );
    }
}