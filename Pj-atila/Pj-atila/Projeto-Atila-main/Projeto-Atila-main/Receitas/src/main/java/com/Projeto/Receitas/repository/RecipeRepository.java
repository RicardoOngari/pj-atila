package com.Projeto.Receitas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Projeto.Receitas.model.Recipe;


@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {


}