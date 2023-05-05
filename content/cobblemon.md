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
    description: "All you need for a small group of friends!"

    content:
      - name: "Helping Hand"
        content: "A tailored Cobblemon server experience perfect for friendly gatherings!"
        icons:
          - /images/move-symbols/basic.svg

      - name: "Spark"
        content: "Balanced performance and affordability for an electrifying start!"
        icons:
          - /images/move-symbols/electric.svg

    customFields:
      - name: "RAM"
        type: "readonly"
        value: "4 GiB"
      
      - name: "nodemodel"
        type: "hidden"
        value: "m1"

      - name: "STORAGE"
        type: "readonly"
        value: "40 GiB"

      - name: "DATABASES"
        type: "readonly"
        value: 2

      - name: "SNAPSHOTS"
        type: "readonly"
        value: 10
      
      - name: "PANEL USERS"
        type: "readonly"
        value: 10
      
      - name: "SERVER TYPE"
        type: "readonly"
        value: "cobblemon"


    featuredItems:
      - name: Packs a Punch
        icon: /images/move-symbols/fighting.svg

      - name: Runs Baremetal
        icon: /images/move-symbols/steel.svg

    
    
    detail:
    - key: CPU
      value: 2 Xeon E5

    - key: RAM
      value: 4 GiB DDR3

    
    - key: STORAGE
      value: 40 GiB
    
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
    description: "A great plan for a great price!"

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
        value: "8 GiB"
      
      - name: "nodemodel"
        type: "hidden"
        value: "m2"

      - name: "STORAGE"
        type: "readonly"
        value: "75 GiB"

      - name: "DATABASES"
        type: "readonly"
        value: 5

      - name: "SNAPSHOTS"
        type: "readonly"
        value: 20
      
      - name: "PANEL USERS"
        type: "readonly"
        value: 20
      
      - name: "SERVER TYPE"
        type: "readonly"
        value: "cobblemon"

    featuredItems:
      - name: Packs a Punch
        icon: /images/move-symbols/fighting.svg

      - name: Runs Baremetal
        icon: /images/move-symbols/steel.svg
    
    detail:
    - key: CPU
      value: 2 Ryzen 5000

    - key: RAM
      value: 8 GiB DDR4

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
    price: 68	
    quota: 16
    measure: GB
    image: /images/price/raichuedited1.png
    selectedPlan: "monthly-plan"
    description: "Our most powerful cobblemon plan! Free upgrade to Ryzen 7000 when available!"

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
        value: "16 GiB"
      
      - name: "nodemodel"
        type: "hidden"
        value: "m2"

      - name: "STORAGE"
        type: "readonly"
        value: "160 GiB"

      - name: "DATABASES"
        type: "readonly"
        value: 16

      - name: "SNAPSHOTS"
        type: "readonly"
        value: 60
      
      - name: "PANEL USERS"
        type: "readonly"
        value: 50
      
      - name: "SERVER TYPE"
        type: "readonly"
        value: "cobblemon"

    featuredItems:
      - name: Packs a Punch
        icon: /images/move-symbols/fighting.svg

      - name: Runs Baremetal
        icon: /images/move-symbols/steel.svg
    
    detail:
    - key: CPU
      value: 4 Ryzen 5000

    - key: RAM
      value: 16 GiB DDR4

    
    - key: STORAGE
      value: 200 GiB
    
    - key: DATABASES
      value: 16
    
    - key: SNAPSHOTS
      value: 60

    data_plans:
      - id: monthly-plan
        name: Cobblemon Raichu Plan
        frequency: monthly
        interval: 1
        count: 999
        price: 68
---
