---
title: "City"
draft: false
category: "General"
weight: 4

product:
  id: "general-city"
  name: "City"
  price: "25.60"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "8 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "50 GiB"

    - name: "nodemodel"
      type: "hidden"
      value: "m2"

    - name: "DATABASES"
      type: "readonly"
      value: 1

    - name: "SNAPSHOTS"
      type: "readonly"
      value: 10
      
    - name: "allocations"
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
      itemPrice: 25.60
---
