---
title: "Town"
draft: false
category: "General"
weight: 3

product:
  id: "general-town"
  name: "Town"
  price: "15.00"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "6 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "30 GiB"

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
      itemPrice: 15.00
---
