---
layout: page
title: Causal Inference Course Outline
permalink: /tutorials/causal-inference/course-outline/
---

<div class="tutorial-header">
  <h1>PhD-Level Course on Causal Inference in Epidemiology</h1>
  <p class="subtitle">Comprehensive Course Outline</p>
</div>

<div class="section-container">
  <div class="tutorial-section">
    <h2>Course Overview</h2>
    <p>
      This comprehensive, PhD-level course explores the theoretical foundations, methodological approaches, and practical applications of causal inference in epidemiology. The course is designed to provide students with a deep understanding of causal reasoning, advanced analytical techniques, and their application to complex epidemiological questions. Through interactive elements, coding exercises, and case studies, students will develop expertise in designing studies and analyzing data to make valid causal inferences in epidemiological research.
    </p>
    
    <div class="learning-objectives">
      <h3>Learning Objectives</h3>
      <p>By the end of this course, students will be able to:</p>
      <ol>
        <li>Articulate the philosophical and theoretical foundations of causality in epidemiological research</li>
        <li>Critically evaluate causal assumptions underlying epidemiological studies</li>
        <li>Apply advanced causal inference methods to complex epidemiological problems</li>
        <li>Construct and interpret causal diagrams (DAGs) for identifying confounding and selection bias</li>
        <li>Implement counterfactual and potential outcomes frameworks in study design and analysis</li>
        <li>Utilize modern causal inference techniques including g-methods, propensity scores, and instrumental variables</li>
        <li>Design studies that optimize causal inference in various epidemiological contexts</li>
        <li>Develop computational skills for implementing causal inference methods using R and Python</li>
        <li>Critically appraise the epidemiological literature through a causal inference lens</li>
        <li>Conduct original analyses applying causal inference methods to real-world epidemiological data</li>
      </ol>
    </div>
  </div>

  <div class="section-divider"></div>
  
  <div class="tutorial-section">
    <h2>Course Structure</h2>
    <p>
      The course is organized into nine comprehensive modules that cover all aspects of causal inference in epidemiology, from theoretical foundations to practical applications.
    </p>
    
    <div class="module-navigation">
      <ul>
        <li><a href="#module1">Module 1: Foundations of Causality in Epidemiology</a></li>
        <li><a href="#module2">Module 2: Causal Identification and Graphical Models</a></li>
        <li><a href="#module3">Module 3: Counterfactual Theory and Potential Outcomes</a></li>
        <li><a href="#module4">Module 4: Experimental Designs for Causal Inference</a></li>
        <li><a href="#module5">Module 5: Observational Study Methods for Causal Inference</a></li>
        <li><a href="#module6">Module 6: Mediation and Interaction Analysis</a></li>
        <li><a href="#module7">Module 7: Applications in Specific Epidemiological Domains</a></li>
        <li><a href="#module8">Module 8: Computational Methods and Software Implementation</a></li>
        <li><a href="#module9">Module 9: Advanced Topics and Frontier Research</a></li>
      </ul>
    </div>
  </div>

  <div class="section-divider"></div>
  
  <!-- Module 1 -->
  <div id="module1" class="module-section">
    <div class="module-header">
      <h2>Module 1: Foundations of Causality in Epidemiology</h2>
    </div>
    
    <div class="module-content">
      <div class="module-unit">
        <h3>1.1 Historical Development of Causal Thinking</h3>
        <ul>
          <li>Evolution of causal concepts from Hume and Mill to modern epidemiology</li>
          <li>Bradford Hill's viewpoints and their modern interpretation</li>
          <li>Rothman's sufficient-component cause model</li>
          <li>Transition from association to causation in epidemiological thinking</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>1.2 Philosophical Frameworks of Causality</h3>
        <ul>
          <li>Deterministic vs. probabilistic causation</li>
          <li>Counterfactual theory of causation</li>
          <li>Manipulationist/interventionist theories</li>
          <li>Probabilistic theories of causation</li>
          <li>Causal pluralism in epidemiology</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>1.3 Modern Causal Frameworks in Epidemiology</h3>
        <ul>
          <li>Counterfactual (potential outcomes) framework</li>
          <li>Structural/mechanistic approach</li>
          <li>Causal inference in the era of big data and precision medicine</li>
          <li>Integration of causal frameworks with systems thinking</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>1.4 Challenges to Causal Inference in Epidemiology</h3>
        <ul>
          <li>Unmeasured confounding</li>
          <li>Selection bias and collider stratification</li>
          <li>Measurement error and misclassification</li>
          <li>Time-varying confounding</li>
          <li>Effect modification and interaction</li>
          <li>Missing data mechanisms</li>
        </ul>
      </div>
    </div>
  </div>
  
  <!-- Module 2 -->
  <div id="module2" class="module-section">
    <div class="module-header">
      <h2>Module 2: Causal Identification and Graphical Models</h2>
    </div>
    
    <div class="module-content">
      <div class="module-unit">
        <h3>2.1 Introduction to Directed Acyclic Graphs (DAGs)</h3>
        <ul>
          <li>Fundamental concepts and terminology</li>
          <li>Causal and non-causal paths</li>
          <li>d-separation and conditional independence</li>
          <li>Identifying confounding using DAGs</li>
          <li>Backdoor and frontdoor criteria</li>
          <li>Instrumental variables in DAGs</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>2.2 Advanced DAG Concepts</h3>
        <ul>
          <li>Time-varying exposures and confounders</li>
          <li>Selection bias and collider stratification</li>
          <li>M-bias and butterfly bias</li>
          <li>Mediators and direct/indirect effects</li>
          <li>Effect modification in DAGs</li>
          <li>Unobserved confounding and sensitivity analysis</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>2.3 Structural Equation Models</h3>
        <ul>
          <li>Path analysis and structural equations</li>
          <li>Identification of causal effects</li>
          <li>Latent variable models</li>
          <li>Non-recursive models</li>
          <li>Comparison with DAGs and potential outcomes</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>2.4 Causal Discovery Algorithms</h3>
        <ul>
          <li>PC algorithm</li>
          <li>FCI algorithm</li>
          <li>RFCI algorithm</li>
          <li>Score-based methods</li>
          <li>Hybrid methods</li>
          <li>Applications and limitations in epidemiology</li>
        </ul>
      </div>
    </div>
  </div>
  
  <!-- Module 3 -->
  <div id="module3" class="module-section">
    <div class="module-header">
      <h2>Module 3: Counterfactual Theory and Potential Outcomes</h2>
    </div>
    
    <div class="module-content">
      <div class="module-unit">
        <h3>3.1 Fundamental Concepts</h3>
        <ul>
          <li>Counterfactual outcomes and potential outcomes</li>
          <li>Individual and population causal effects</li>
          <li>Stable unit treatment value assumption (SUTVA)</li>
          <li>Consistency assumption</li>
          <li>Positivity assumption</li>
          <li>Exchangeability and conditional exchangeability</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>3.2 Causal Estimands and Identifiability</h3>
        <ul>
          <li>Average treatment effect (ATE)</li>
          <li>Average treatment effect on the treated (ATT)</li>
          <li>Conditional average treatment effects</li>
          <li>Natural direct and indirect effects</li>
          <li>Controlled direct effects</li>
          <li>Mediated effects and path-specific effects</li>
          <li>Identifiability conditions for various causal effects</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>3.3 Causal Inference with Interference</h3>
        <ul>
          <li>Spillover effects</li>
          <li>Cluster-level interventions</li>
          <li>Direct, indirect, and total causal effects under interference</li>
          <li>Identification strategies with interference</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>3.4 Transportability and External Validity</h3>
        <ul>
          <li>Selection diagrams</li>
          <li>Transport formulas</li>
          <li>Meta-transportability</li>
          <li>Data fusion methods</li>
          <li>Generalizability of causal effects</li>
        </ul>
      </div>
    </div>
  </div>
  
  <!-- Module 4 -->
  <div id="module4" class="module-section">
    <div class="module-header">
      <h2>Module 4: Experimental Designs for Causal Inference</h2>
    </div>
    
    <div class="module-content">
      <div class="module-unit">
        <h3>4.1 Randomized Controlled Trials</h3>
        <ul>
          <li>Principles of randomization</li>
          <li>Pragmatic vs. explanatory trials</li>
          <li>Cluster randomized trials</li>
          <li>Stepped-wedge designs</li>
          <li>Adaptive trial designs</li>
          <li>Analysis of RCT data for causal effects</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>4.2 Quasi-Experimental Designs</h3>
        <ul>
          <li>Natural experiments</li>
          <li>Regression discontinuity designs</li>
          <li>Sharp vs. fuzzy regression discontinuity</li>
          <li>Interrupted time series</li>
          <li>Controlled before-after studies</li>
          <li>Difference-in-differences designs</li>
          <li>Synthetic control methods</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>4.3 Instrumental Variable Methods</h3>
        <ul>
          <li>Identification assumptions</li>
          <li>Two-stage least squares</li>
          <li>Mendelian randomization</li>
          <li>Preference-based instruments</li>
          <li>Policy changes as instruments</li>
          <li>Weak instruments and bias</li>
          <li>Local average treatment effects (LATE)</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>4.4 Advanced Experimental Designs</h3>
        <ul>
          <li>Sequential multiple assignment randomized trials (SMART)</li>
          <li>Micro-randomized trials</li>
          <li>Platform trials</li>
          <li>Crossover designs with carryover effects</li>
          <li>Factorial designs for interaction assessment</li>
          <li>Adaptive enrichment designs</li>
        </ul>
      </div>
    </div>
  </div>
  
  <!-- Module 5 -->
  <div id="module5" class="module-section">
    <div class="module-header">
      <h2>Module 5: Observational Study Methods for Causal Inference</h2>
    </div>
    
    <div class="module-content">
      <div class="module-unit">
        <h3>5.1 Matching Methods</h3>
        <ul>
          <li>Exact matching</li>
          <li>Propensity score matching</li>
          <li>Mahalanobis distance matching</li>
          <li>Coarsened exact matching</li>
          <li>Genetic matching</li>
          <li>Matching with time-varying exposures</li>
          <li>Optimal matching algorithms</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>5.2 Weighting Methods</h3>
        <ul>
          <li>Inverse probability of treatment weighting (IPTW)</li>
          <li>Standardized mortality/morbidity ratio weighting</li>
          <li>Overlap weights</li>
          <li>Entropy balancing</li>
          <li>Covariate balancing propensity score</li>
          <li>Doubly robust estimation</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>5.3 G-Methods</h3>
        <ul>
          <li>G-computation formula</li>
          <li>Marginal structural models</li>
          <li>Structural nested models</li>
          <li>G-estimation</li>
          <li>Handling time-varying confounding</li>
          <li>Comparison of g-methods with traditional approaches</li>
        </ul>
      </div>
      
      <div class="module-unit">
        <h3>5.4 Double/Debiased Machine Learning</h3>
        <ul>
          <li>Neyman orthogonality</li>
          <li>Cross-fitting</li>
          <li>High-dimensional confounding adjustment</li>
          <li

