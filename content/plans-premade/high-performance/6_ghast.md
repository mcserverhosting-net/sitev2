---
title: "Ghast"
draft: false
category: "High Performance"
weight: 3

product:
  id: "ghast"
  name: "Ghast"
  price: "25.20"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "6 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "60 GiB"

    - name: "nodemodel"
      type: "hidden"
      value: "m3"

    - name: "DATABASES"
      type: "readonly"
      value: 8

    - name: "SNAPSHOTS"
      type: "readonly"
      value: 25
      
    - name: "PANEL USERS"
      type: "readonly"
      value: 50
      
    - name: "SERVER TYPE"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 25.20
---