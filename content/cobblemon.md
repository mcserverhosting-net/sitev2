---
title: pricing new
layout: price

product:
  - featured: false
    id: "basic"
    name: "Pichu"
    price: 5
    quota: 4
    measure: GB
    image: /images/price/cobblemonBg2.png
    selectedPlan: "monthly-plan"

    content:
      - name: "Helping Hand"
        content: "An optimized Cobblemon server great for friends!"
        icons:
          - /images/move-symbols/basic.svg

      - name: "Spark"
        content: "Just the right amount of power at the best price!"
        icons:
          - /images/move-symbols/electric.svg

    customFields:
      - name: "RAM"
        type: "readonly"
        value: "4 GB"

    featuredItems:
      - name: Packs a Punch
        icon: /images/move-symbols/fighting.svg

      - name: Runs on Baremetal
        icon: /images/move-symbols/steel.svg

    
    
    detail:
    - key: CPU
      value: 2 Xeon E5
    
    - key: STORAGE
      value: 40 GB
    
    - key: DATABASE
      value: 2
    
    - key: SNAPSHOTS
      value: 10

    availablePlans:
      - id: "monthly-plan"
        name: "Cobblemon Pichu Plan"
        frequency: "monthly"
        interval: 1
        itemPrice: 5.00

    data_plans:
      - id: monthly-plan
        name: Cobblemon Pichu Plan
        frequency: monthly
        interval: 1
        count: 999
        price: 5

  - featured: true
    id: "evolved"
    name: "Pikachu"
    price: 32
    quota: 8
    measure: GB
    image: /images/price/pikaedited1.png
    selectedPlan: "monthly-plan"

    content:
      - name: "Quick Attack"
        content: "Fast setup and easy management for an effortless start!"
        icons:
          - /images/move-symbols/basic.svg
          - /images/move-symbols/basic.svg

      - name: "Thunderbolt"
        content: "Powerful performance for a smooth and lag-free experience!"
        icons:
          - /images/move-symbols/electric.svg
          - /images/move-symbols/electric.svg

    customFields:
      - name: "RAM"
        type: "readonly"
        value: "8 GB"

    featuredItems:
      - name: Packs a Punch
        icon: /images/move-symbols/fighting.svg

      - name: Runs on Baremetal
        icon: /images/move-symbols/steel.svg
    
    detail:
    - key: CPU
      value: 2 Ryzen 5000
    
    - key: STORAGE
      value: 75 GiB
    
    - key: DATABASES
      value: 5
    
    - key: SNAPSHOTS
      value: 20

    availablePlans:
      - id: "monthly-plan"
        name: "Cobblemon Pikachu Plan"
        frequency: "monthly"
        interval: 1
        itemPrice: 32.00

    data_plans:
      - id: monthly-plan
        name: Cobblemon Pikachu Plan
        frequency: monthly
        interval: 1
        count: 999
        price: 32

  - featured: false
    id: "legendary"
    name: "Raichu"
    price: 90
    quota: 16
    measure: GB
    image: /images/price/raichuedited1.png
    selectedPlan: "monthly-plan"
    description: "This is "

    content:
      - name: "Agility"
        content: "Super responsive support and priority service, for when you need it most!"
        icons:
          - /images/move-symbols/basic.svg
          - /images/move-symbols/basic.svg
          - /images/move-symbols/basic.svg

      - name: "Thunder Punch"
        content: "Robust infrastructure and superior power, for the most demanding servers!"
        icons:
          - /images/move-symbols/electric.svg
          - /images/move-symbols/electric.svg
          - /images/move-symbols/electric.svg

    customFields:
      - name: "RAM"
        type: "readonly"
        value: "16 GB"

    featuredItems:
      - name: Packs a Punch
        icon: /images/move-symbols/fighting.svg

      - name: Runs on Baremetal
        icon: /images/move-symbols/steel.svg
    
    detail:
    - key: CPU
      value: 4 Ryzen 5000
    
    - key: STORAGE
      value: 200 GiB
    
    - key: DATABASES
      value: 25
    
    - key: SNAPSHOTS
      value: 50

    data_plans:
      - id: monthly-plan
        name: Cobblemon Raichu Plan
        frequency: monthly
        interval: 1
        count: 999
        price: 90
---
