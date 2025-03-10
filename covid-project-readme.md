# COVID-19 Survival Analysis

[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

This repository contains a comprehensive analysis of COVID-19 patient data, focusing on factors influencing hospital length of stay (LoS) and mortality outcomes.

![Survival Curves](figures/publication/survival_wave.png)

## Project Overview

The COVID-19 pandemic created unprecedented challenges for healthcare systems worldwide. Understanding the factors that influence hospital outcomes is crucial for healthcare planning, resource allocation, and improving patient care.

This analysis explores:
- Patient demographic patterns and their relationship to outcomes
- Length of stay distribution across different patient groups
- Survival analysis using both non-parametric and parametric approaches
- Hospital-level variations in outcomes using mixed-effects models

## Repository Structure

```
covid-survival-analysis/
│
├── README.md                          # Project overview (this file)
├── LICENSE.md                         # CC BY-NC-ND 4.0 license
├── COVID19_Survival_Analysis.Rmd      # Main R Markdown document
├── 00_run_analysis.R                  # Main runner script
├── data/
│   └── COVID19_LoS_28032023.txt       # Source data file
├── scripts/
│   ├── 01_data_preprocessing.R        # Data loading and preprocessing
│   ├── 02_descriptive_analysis.R      # Descriptive statistics and visualizations
│   ├── 03_survival_analysis.R         # Non-parametric and semi-parametric models
│   ├── 04_parametric_models.R         # Parametric survival models
│   ├── 05_mixed_effects_models.R      # Mixed-effects models for clustering
│   └── 06_visualization.R             # Publication-quality visualizations
├── figures/                           # Generated visualizations
├── output/                            # Analysis results
├── models/                            # Saved model objects
└── logs/                              # Analysis logs
```

## Analysis Workflow

The analysis follows these key steps:

1. **Data Preprocessing** (01_data_preprocessing.R)
   - Load and clean the COVID-19 data
   - Create age groups, CT value categories
   - Generate demographic summaries

2. **Descriptive Analysis** (02_descriptive_analysis.R)
   - Create demographic visualizations
   - Generate cross-tabulations
   - Examine distributions of key variables

3. **Survival Analysis** (03_survival_analysis.R)
   - Perform Kaplan-Meier analysis by various factors
   - Fit Cox proportional hazards models
   - Test model assumptions

4. **Parametric Models** (04_parametric_models.R)
   - Compare different parametric distributions
   - Fit Accelerated Failure Time (AFT) models
   - Perform model selection

5. **Mixed-Effects Models** (05_mixed_effects_models.R)
   - Account for hospital-level clustering
   - Analyze hospital random effects
   - Examine variation in outcomes

6. **Visualization** (06_visualization.R)
   - Create publication-quality figures
   - Generate comprehensive visualizations
   - Prepare results for presentation

## Key Findings

- **Age Effects**: Strong association between age and mortality, with elderly patients having significantly higher risk
- **Gender Differences**: Males show different survival patterns compared to females
- **Wave Variations**: Significant differences in outcomes across different COVID-19 waves
- **Hospital Effects**: Substantial variation in outcomes between different hospitals

## Requirements

This analysis requires R with the following packages:
- dplyr, tidyverse - Data manipulation
- survival, survminer, flexsurv - Survival analysis
- ggplot2, patchwork, RColorBrewer - Visualization
- coxme, lme4 - Mixed-effects models
- gtsummary, sjPlot - Results presentation
- car, MASS - Statistical functions
- Other helpers: rio, gmodels, rstanarm, ranger, randomForestSRC

## Usage

1. Clone this repository
2. Place the data file in the `/data` directory
3. Run the analysis with the main script:

```r
# Install required packages if needed
if (!require("pacman")) install.packages("pacman")

# Run the complete analysis
source("00_run_analysis.R")
```

Alternatively, you can run each script individually in sequence:

```r
source("01_data_preprocessing.R")
source("02_descriptive_analysis.R")
# ... and so on
```

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nc-nd/4.0/).

## Contact

Geoffrey Manda  
GitHub: [https://github.com/GeoffreyManda](https://github.com/GeoffreyManda)
