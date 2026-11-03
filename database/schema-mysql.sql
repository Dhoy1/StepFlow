-- ========================================================
-- StepFlow (Tango Clone) - MySQL Database Schema
-- Compatible with Laragon, XAMPP, and MySQL 5.7+ / 8.0+
-- Database: stepflow_db
-- ========================================================

CREATE DATABASE IF NOT EXISTS `stepflow_db` 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

USE `stepflow_db`;

-- 1. Workflows Table (Stores guide metadata)
CREATE TABLE IF NOT EXISTS `workflows` (
  `id` VARCHAR(100) NOT NULL PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `category` VARCHAR(100) DEFAULT 'General SOP',
  `target_url` TEXT NULL,
  `author` VARCHAR(100) DEFAULT 'Tim Perusahaan',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Steps Table (Stores individual steps, high-res screenshots, and visual annotations)
CREATE TABLE IF NOT EXISTS `steps` (
  `id` VARCHAR(100) NOT NULL PRIMARY KEY,
  `workflow_id` VARCHAR(100) NOT NULL,
  `order_index` INT NOT NULL,
  `action_type` VARCHAR(50) DEFAULT 'click',
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `url` TEXT NULL,
  `page_title` TEXT NULL,
  `screenshot_url` LONGTEXT NOT NULL,
  `highlight_json` JSON NULL,
  `callout_json` JSON NULL,
  `blur_regions_json` JSON NULL,
  `arrows_json` JSON NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_steps_workflow_id` (`workflow_id`),
  CONSTRAINT `fk_steps_workflow` 
    FOREIGN KEY (`workflow_id`) REFERENCES `workflows` (`id`) 
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
