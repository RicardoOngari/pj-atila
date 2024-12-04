package com.Projeto.Receitas.controller;

import com.Projeto.Receitas.dto.RecipeDto;
import com.Projeto.Receitas.model.Recipe;
import com.Projeto.Receitas.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("/recipes")
public class RecipeController {

	@Autowired
	private RecipeRepository recipeRepository;

	@GetMapping
	public ResponseEntity<?> getAllModels() {
		return ResponseEntity.ok(recipeRepository.findAll());
	}

	@PostMapping
	public ResponseEntity<?> criar(@RequestBody RecipeDto recipe) {
		Recipe re = new Recipe(recipe);
		return ResponseEntity.ok(recipeRepository.save(re));
	}

	@GetMapping("/{id}")
	public ResponseEntity<Recipe> buscarPorId(@PathVariable Long id) {
		Optional<Recipe> recipe = recipeRepository.findById(id);
		if (recipe.isPresent()) {
			return ResponseEntity.ok(recipe.get());
		}
		return ResponseEntity.notFound().build();
	}

	@PutMapping("/{id}")
	public ResponseEntity<Recipe> editModel(@PathVariable long id, @RequestBody RecipeDto d) {
		return recipeRepository.findById(id).map(existingRecipe -> {

			existingRecipe.setTitle(d.title());
			existingRecipe.setDescription(d.description());
			existingRecipe.setUrl(d.url());

			Recipe updatedRecipe = recipeRepository.save(existingRecipe);

			return ResponseEntity.ok(updatedRecipe);
		}).orElse(ResponseEntity.notFound().build());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteModel(@PathVariable long id) {
		if (!recipeRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		recipeRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
