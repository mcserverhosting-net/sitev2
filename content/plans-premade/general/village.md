---
title: "Village"
draft: false
category: "General"
weight: 2

product:
  id: "general-village"
  name: "Village"
  price: "12.80"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "4 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "20 GiB"

    - name: "nodemodel"
      type: "hidden"
      value: "m2"

    - name: "DATABASES"
      type: "readonly"
      value: 1

    - name: "SNAPSHOTS"
      type: "readonly"
      value: 10
      
    - name: "PANEL USERS"
      type: "hidden"
      value: 10
      
    - name: "SERVER TYPE"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 12.80
---
