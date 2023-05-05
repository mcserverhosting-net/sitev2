---
title: "Region"
draft: false
category: "General"
weight: 5

product:
  id: "region-town"
  name: "Region"
  price: "32.00"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "10 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "75 GiB"

    - name: "nodemodel"
      type: "hidden"
      value: "m2"

    - name: "DATABASES"
      type: "readonly"
      value: 4

    - name: "SNAPSHOTS"
      type: "readonly"
      value: 25
      
    - name: "PANEL USERS"
      type: "readonly"
      value: 25
      
    - name: "SERVER TYPE"
      options: "vanilla|paper|fabric|spongevanilla|forge"

  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 32.00
---
