package com.Projeto.Receitas.model;

import com.Projeto.Receitas.dto.RecipeDto;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;   

    private String title;

    private String description;

    private String url;

    public Recipe(RecipeDto r) {
        this.title = r.title();
        this.description = r.description();
        this.url = r.url();

    }

    public Recipe(String title, String description, String url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }
    public Recipe(){

    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
    
}

