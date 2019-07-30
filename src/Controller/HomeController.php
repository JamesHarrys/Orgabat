<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class HomeController extends AbstractController {

    /**
     * @Route("/", name="homepage")
     */
    public function home(){

        $firstname = 'test';
        $lastname = '';

        return $this->render(
            'home.html.twig',
            [
                'title' => "Accueil",
                'firstname' => $firstname,
                'lastname' => $lastname
            ]
        );
    }

    /**
     * @Route("/login", name="login")
     */
    public function login(Request $request){
        // Récupère les valeurs de POST du form et les assigne à leur variables
        $firstname = $request->get('firstname');;
        $lastname = $request->get('lastname');

        // POST
        $form = $this->createFormBuilder()
            ->add('firstname')
            ->add('lastname')
            ->add('Submit', SubmitType::class)
            ->getForm();


        return $this->render(
            'login.html.twig',
            [
                'firstname' => $firstname,
                'lastname' => $lastname,
                'form' => $form->createView()
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