---
title: "turtle"
draft: false
category: "Economy"
weight: 3

product:
  id: "turtle"
  name: "Turtle"
  price: "7.50"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "6 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "60 GiB"

    - name: "nodemodel"
      type: "hidden"
      value: "m1"

    - name: "DATABASES"
      type: "readonly"
      value: 1

    - name: "SNAPSHOTS"
      type: "readonly"
      value: 10
      
    - name: "PANEL USERS"
      type: "readonly"
      value: 10
      
    - name: "SERVER TYPE"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 7.50
---
